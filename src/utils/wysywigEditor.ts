import { Jodit as BaseJodit } from 'jodit';

export class Jodit extends BaseJodit {
  // eslint-disable-next-line
  constructor(...args: unknown[]) {
    // eslint-disable-next-line
    // @ts-ignore
    super(...args);

    // eslint-disable-next-line
    const setCursorIn = this.selection.setCursorIn;
    // eslint-disable-next-line
    // @ts-ignore
    this.selection.setCursorIn = function(node: Node, inStart = false): Node {
      try {
        return setCursorIn.call(this.selection, node, inStart);
      } catch (e) {
        const range = this.createRange();

        let start: Node | null = node,
          last: Node = node;

        do {
          if (Boolean(start && start.nodeType === Node.TEXT_NODE)) {
            break;
          }
          last = start;
          start = inStart ? start.firstChild : start.lastChild;
        } while (start);

        if (!start) {
          const fakeNode = this.j.createInside.text('\uFEFF');

          if (!/^(img|br|input)$/i.test(last.nodeName)) {
            last.appendChild(fakeNode);
            last = fakeNode;
          } else {
            start = last;
          }
        }

        range.selectNodeContents(start || last);
        range.collapse(inStart);

        this.selectRange(range);

        return last;
      }
    };
  }

  // eslint-disable-next-line
  static make(element: HTMLElement | string, options?: object): Jodit {
    return new Jodit(element, options);
  }
}
