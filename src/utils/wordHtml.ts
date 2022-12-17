/* eslint-disable max-len */

import { IAgreementDocument } from 'store/documents/types';

export const getMetaTags = (): string => `
  <meta http-equiv=Content-Type content="text/html; charset=utf-8">
  <meta name=ProgId content=Word.Document>
  <meta name=Generator content="Microsoft Word 15">
  <meta name=Originator content="Microsoft Word 15">
`;

export const getXMLMetaData = (): string => `
<!--[if !mso]>
<style>
v\\:* {behavior:url(#default#VML);}
o\\:* {behavior:url(#default#VML);}
w\\:* {behavior:url(#default#VML);}
.shape {behavior:url(#default#VML);}
</style>
<![endif]-->
<!--[if gte mso 9]><xml>
<b:Sources SelectedStyle="\\APA.XSL" StyleName="APA" xmlns:b="http://schemas.openxmlformats.org/officeDocument/2006/bibliography" xmlns="http://schemas.openxmlformats.org/officeDocument/2006/bibliography">
<ds:datastoreItem ds:itemID="{A483F77F-E420-4351-A4A8-129FD6ADBA70}" xmlns:ds="http://schemas.openxmlformats.org/officeDocument/2006/customXml">
    <ds:schemaRefs>
        <ds:schemaRef ds:uri="http://schemas.openxmlformats.org/officeDocument/2006/bibliography"/>
    </ds:schemaRefs>
</ds:datastoreItem>
</b:Sources>
<a:clrMap xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/>
 <o:DocumentProperties>
  <o:Author>SvetaK</o:Author>
  <o:LastAuthor>Microsoft Office User</o:LastAuthor>
  <o:Revision>2</o:Revision>
  <o:TotalTime>30</o:TotalTime>
  <o:LastPrinted>2022-06-23T09:08:00Z</o:LastPrinted>
  <o:Created>2022-07-18T06:58:00Z</o:Created>
  <o:LastSaved>2022-07-18T06:58:00Z</o:LastSaved>
  <o:Pages>5</o:Pages>
  <o:Words>4138</o:Words>
  <o:Characters>23591</o:Characters>
  <o:Company>Организация</o:Company>
  <o:Lines>196</o:Lines>
  <o:Paragraphs>55</o:Paragraphs>
  <o:CharactersWithSpaces>27674</o:CharactersWithSpaces>
  <o:Version>16.00</o:Version>
 </o:DocumentProperties>
 <o:OfficeDocumentSettings>
  <o:RelyOnVML/>
  <o:AllowPNG/>
 </o:OfficeDocumentSettings>
</xml><![endif]-->
<!--[if gte mso 9]><xml>
 <w:WordDocument>
  <w:SpellingState>Clean</w:SpellingState>
  <w:GrammarState>Clean</w:GrammarState>
  <w:TrackMoves>false</w:TrackMoves>
  <w:TrackFormatting/>
  <w:PunctuationKerning/>
  <w:ValidateAgainstSchemas/>
  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
  <w:DoNotPromoteQF/>
  <w:LidThemeOther>RU</w:LidThemeOther>
  <w:LidThemeAsian>X-NONE</w:LidThemeAsian>
  <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
  <w:Compatibility>
   <w:BreakWrappedTables/>
   <w:SnapToGridInCell/>
   <w:WrapTextWithPunct/>
   <w:UseAsianBreakRules/>
   <w:DontGrowAutofit/>
   <w:SplitPgBreakAndParaMark/>
   <w:EnableOpenTypeKerning/>
   <w:DontFlipMirrorIndents/>
   <w:OverrideTableStyleHps/>
  </w:Compatibility>
  <m:mathPr>
   <m:mathFont m:val="Cambria Math"/>
   <m:brkBin m:val="before"/>
   <m:brkBinSub m:val="&#45;-"/>
   <m:smallFrac/>
   <m:dispDef/>
   <m:lMargin m:val="0"/>
   <m:rMargin m:val="0"/>
   <m:defJc m:val="centerGroup"/>
   <m:wrapIndent m:val="1440"/>
   <m:intLim m:val="subSup"/>
   <m:naryLim m:val="undOvr"/>
  </m:mathPr></w:WordDocument>
</xml><![endif]-->
<!--[if gte mso 9]><xml>
 <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="false"
  DefSemiHidden="false" DefQFormat="false" LatentStyleCount="376">
  <w:LsdException Locked="false" QFormat="true" Name="Normal"/>
  <w:LsdException Locked="false" QFormat="true" Name="heading 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   QFormat="true" Name="heading 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   QFormat="true" Name="heading 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   QFormat="true" Name="heading 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   QFormat="true" Name="heading 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   QFormat="true" Name="heading 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   QFormat="true" Name="heading 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   QFormat="true" Name="heading 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   QFormat="true" Name="heading 9"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 9"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toc 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toc 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toc 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toc 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toc 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toc 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toc 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toc 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toc 9"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="header"/>
  <w:LsdException Locked="false" Priority="99" SemiHidden="true"
   UnhideWhenUsed="true" Name="footer"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index heading"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   QFormat="true" Name="caption"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of figures"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope address"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope return"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="line number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="page number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of authorities"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="macro"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toa heading"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 5"/>
  <w:LsdException Locked="false" QFormat="true" Name="Title"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Closing"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Signature"/>
  <w:LsdException Locked="false" Priority="1" SemiHidden="true"
   UnhideWhenUsed="true" Name="Default Paragraph Font"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Message Header"/>
  <w:LsdException Locked="false" QFormat="true" Name="Subtitle"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text First Indent 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Note Heading"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Block Text"/>
  <w:LsdException Locked="false" Priority="99" SemiHidden="true"
   UnhideWhenUsed="true" Name="Hyperlink"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="FollowedHyperlink"/>
  <w:LsdException Locked="false" QFormat="true" Name="Strong"/>
  <w:LsdException Locked="false" QFormat="true" Name="Emphasis"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Document Map"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Plain Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="E-mail Signature"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Top of Form"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Bottom of Form"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal (Web)"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Acronym"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Address"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Cite"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Code"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Definition"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Keyboard"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Preformatted"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Sample"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Typewriter"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Variable"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation subject"/>
  <w:LsdException Locked="false" Priority="99" SemiHidden="true"
   UnhideWhenUsed="true" Name="No List"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Contemporary"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Elegant"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Professional"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Subtle 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Balloon Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Theme"/>
  <w:LsdException Locked="false" Priority="99" SemiHidden="true"
   Name="Placeholder Text"/>
  <w:LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 1"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="99" SemiHidden="true" Name="Revision"/>
  <w:LsdException Locked="false" Priority="34" QFormat="true"
   Name="List Paragraph"/>
  <w:LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"/>
  <w:LsdException Locked="false" Priority="30" QFormat="true"
   Name="Intense Quote"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 1"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 2"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 2"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 3"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 3"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 4"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 4"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 5"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 5"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 6"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 6"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="19" QFormat="true"
   Name="Subtle Emphasis"/>
  <w:LsdException Locked="false" Priority="21" QFormat="true"
   Name="Intense Emphasis"/>
  <w:LsdException Locked="false" Priority="31" QFormat="true"
   Name="Subtle Reference"/>
  <w:LsdException Locked="false" Priority="32" QFormat="true"
   Name="Intense Reference"/>
  <w:LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"/>
  <w:LsdException Locked="false" Priority="37" SemiHidden="true"
   UnhideWhenUsed="true" Name="Bibliography"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"/>
  <w:LsdException Locked="false" Priority="41" Name="Plain Table 1"/>
  <w:LsdException Locked="false" Priority="42" Name="Plain Table 2"/>
  <w:LsdException Locked="false" Priority="43" Name="Plain Table 3"/>
  <w:LsdException Locked="false" Priority="44" Name="Plain Table 4"/>
  <w:LsdException Locked="false" Priority="45" Name="Plain Table 5"/>
  <w:LsdException Locked="false" Priority="40" Name="Grid Table Light"/>
  <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"/>
  <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"/>
  <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 1"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 2"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 3"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 4"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 5"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 6"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark"/>
  <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"/>
  <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 1"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 2"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 3"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 4"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 5"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 6"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="99" SemiHidden="true"
   UnhideWhenUsed="true" Name="Mention"/>
  <w:LsdException Locked="false" Priority="99" SemiHidden="true"
   UnhideWhenUsed="true" Name="Smart Hyperlink"/>
  <w:LsdException Locked="false" Priority="99" SemiHidden="true"
   UnhideWhenUsed="true" Name="Hashtag"/>
  <w:LsdException Locked="false" Priority="99" SemiHidden="true"
   UnhideWhenUsed="true" Name="Unresolved Mention"/>
  <w:LsdException Locked="false" Priority="99" SemiHidden="true"
   UnhideWhenUsed="true" Name="Smart Link"/>
 </w:LatentStyles>
</xml><![endif]-->
<!--[if gte mso 10]>
<style>
 /* Style Definitions */
 table.MsoNormalTable
{mso-style-name:"Table Normal";
mso-tstyle-rowband-size:0;
mso-tstyle-colband-size:0;
mso-style-noshow:yes;
mso-style-priority:99;
mso-style-parent:"";
mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
mso-para-margin:0cm;
mso-pagination:widow-orphan;
font-size:10.0pt;
font-family:"Times New Roman",serif;
mso-ansi-language:RU;
mso-fareast-language:RU;}
table.MsoTableGrid
{mso-style-name:"Table Grid";
mso-tstyle-rowband-size:0;
mso-tstyle-colband-size:0;
mso-style-unhide:no;
border:solid black 1.0pt;
mso-border-alt:solid black .5pt;
mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
mso-border-insideh:.5pt solid black;
mso-border-insidev:.5pt solid black;
mso-para-margin:0cm;
mso-pagination:widow-orphan;
font-size:10.0pt;
font-family:"Times New Roman",serif;
mso-ansi-language:RU;
mso-fareast-language:RU;}
</style>
<![endif]-->
<!--[if gte mso 9]><xml>
 <o:shapedefaults v:ext="edit" spidmax="2050"/>
</xml><![endif]-->
<!--[if gte mso 9]><xml>
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="2"/>
 </o:shapelayout></xml><![endif]-->
`;

export const getStyles = (): string => `
<style>
<!--
 /* Font Definitions */
 @font-face {font-family:"Cambria Math";
panose-1:2 4 5 3 5 4 6 3 2 4;
mso-font-charset:0;
mso-generic-font-family:roman;
mso-font-pitch:variable;
mso-font-signature:3 0 0 0 1 0;}
@font-face
{font-family:Calibri;
panose-1:2 15 5 2 2 2 4 3 2 4;
mso-font-charset:204;
mso-generic-font-family:swiss;
mso-font-pitch:variable;
mso-font-signature:-469750017 -1073732485 9 0 511 0;}
@font-face
{font-family:Tahoma;
panose-1:2 11 6 4 3 5 4 4 2 4;
mso-font-charset:204;
mso-generic-font-family:swiss;
mso-font-pitch:variable;
mso-font-signature:-520081665 -1073717157 41 0 66047 0;}
@font-face
{font-family:Garamond;
panose-1:2 2 4 4 3 3 1 1 8 3;
mso-font-charset:204;
mso-generic-font-family:roman;
mso-font-pitch:variable;
mso-font-signature:647 2 0 0 159 0;}
@font-face
{font-family:Gabriola;
panose-1:4 4 6 5 5 16 2 2 13 2;
mso-font-charset:204;
mso-generic-font-family:decorative;
mso-font-pitch:variable;
mso-font-signature:-536870161 1342185547 0 0 159 0;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
{mso-style-unhide:no;
mso-style-qformat:yes;
mso-style-parent:"";
margin:0cm;
mso-pagination:widow-orphan;
font-size:12.0pt;
font-family:"Times New Roman",serif;
mso-fareast-font-family:"Times New Roman";
mso-ansi-language:RU;
mso-fareast-language:RU;}
p.MsoCommentText, li.MsoCommentText, div.MsoCommentText
{mso-style-unhide:no;
mso-style-link:"Comment Text Char";
margin:0cm;
mso-pagination:widow-orphan;
font-size:10.0pt;
font-family:"Times New Roman",serif;
mso-fareast-font-family:"Times New Roman";
mso-ansi-language:RU;
mso-fareast-language:RU;}
p.MsoHeader, li.MsoHeader, div.MsoHeader
{mso-style-unhide:no;
mso-style-link:"Header Char";
margin:0cm;
mso-pagination:widow-orphan;
tab-stops:center 233.85pt right 467.75pt;
font-size:12.0pt;
font-family:"Times New Roman",serif;
mso-fareast-font-family:"Times New Roman";
mso-ansi-language:RU;
mso-fareast-language:RU;}
p.MsoFooter, li.MsoFooter, div.MsoFooter
{mso-style-priority:99;
mso-style-unhide:no;
mso-style-link:"Footer Char";
margin:0cm;
mso-pagination:widow-orphan;
tab-stops:center 233.85pt right 467.75pt;
font-size:12.0pt;
font-family:"Times New Roman",serif;
mso-fareast-font-family:"Times New Roman";
mso-ansi-language:RU;
mso-fareast-language:RU;}
span.MsoCommentReference
{mso-style-unhide:no;
mso-ansi-font-size:8.0pt;
mso-bidi-font-size:8.0pt;}
a:link, span.MsoHyperlink
{mso-style-priority:99;
mso-ansi-font-size:10.0pt;
mso-bidi-font-size:10.0pt;
font-family:"Times New Roman",serif;
mso-ascii-font-family:"Times New Roman";
mso-hansi-font-family:"Times New Roman";
mso-bidi-font-family:"Times New Roman";
color:navy;
font-weight:bold;
font-style:normal;
text-decoration:underline;
text-underline:single;}
a:visited, span.MsoHyperlinkFollowed
{mso-style-noshow:yes;
color:purple;
mso-themecolor:followedhyperlink;
text-decoration:underline;
text-underline:single;}
p.MsoCommentSubject, li.MsoCommentSubject, div.MsoCommentSubject
{mso-style-unhide:no;
mso-style-parent:"Comment Text";
mso-style-link:"Comment Subject Char";
mso-style-next:"Comment Text";
margin:0cm;
mso-pagination:widow-orphan;
font-size:10.0pt;
font-family:"Times New Roman",serif;
mso-fareast-font-family:"Times New Roman";
mso-ansi-language:RU;
mso-fareast-language:RU;
font-weight:bold;}
p.MsoAcetate, li.MsoAcetate, div.MsoAcetate
{mso-style-unhide:no;
mso-style-link:"Balloon Text Char";
margin:0cm;
mso-pagination:widow-orphan;
font-size:8.0pt;
font-family:"Tahoma",sans-serif;
mso-fareast-font-family:"Times New Roman";
mso-ansi-language:RU;
mso-fareast-language:RU;}
p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
{mso-style-priority:34;
mso-style-unhide:no;
mso-style-qformat:yes;
margin-top:0cm;
margin-right:0cm;
margin-bottom:10.0pt;
margin-left:36.0pt;
mso-add-space:auto;
line-height:115%;
mso-pagination:widow-orphan;
font-size:11.0pt;
font-family:"Calibri",sans-serif;
mso-fareast-font-family:Calibri;
mso-bidi-font-family:"Times New Roman";
mso-ansi-language:RU;
mso-fareast-language:EN-US;}
p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst
{mso-style-priority:34;
mso-style-unhide:no;
mso-style-qformat:yes;
mso-style-type:export-only;
margin-top:0cm;
margin-right:0cm;
margin-bottom:0cm;
margin-left:36.0pt;
mso-add-space:auto;
line-height:115%;
mso-pagination:widow-orphan;
font-size:11.0pt;
font-family:"Calibri",sans-serif;
mso-fareast-font-family:Calibri;
mso-bidi-font-family:"Times New Roman";
mso-ansi-language:RU;
mso-fareast-language:EN-US;}
p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle
{mso-style-priority:34;
mso-style-unhide:no;
mso-style-qformat:yes;
mso-style-type:export-only;
margin-top:0cm;
margin-right:0cm;
margin-bottom:0cm;
margin-left:36.0pt;
mso-add-space:auto;
line-height:115%;
mso-pagination:widow-orphan;
font-size:11.0pt;
font-family:"Calibri",sans-serif;
mso-fareast-font-family:Calibri;
mso-bidi-font-family:"Times New Roman";
mso-ansi-language:RU;
mso-fareast-language:EN-US;}
p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast
{mso-style-priority:34;
mso-style-unhide:no;
mso-style-qformat:yes;
mso-style-type:export-only;
margin-top:0cm;
margin-right:0cm;
margin-bottom:10.0pt;
margin-left:36.0pt;
mso-add-space:auto;
line-height:115%;
mso-pagination:widow-orphan;
font-size:11.0pt;
font-family:"Calibri",sans-serif;
mso-fareast-font-family:Calibri;
mso-bidi-font-family:"Times New Roman";
mso-ansi-language:RU;
mso-fareast-language:EN-US;}
span.HeaderChar
{mso-style-name:"Header Char";
mso-style-unhide:no;
mso-style-locked:yes;
mso-style-link:Header;
mso-ansi-font-size:12.0pt;
mso-bidi-font-size:12.0pt;}
span.FooterChar
{mso-style-name:"Footer Char";
mso-style-priority:99;
mso-style-unhide:no;
mso-style-locked:yes;
mso-style-link:Footer;
mso-ansi-font-size:12.0pt;
mso-bidi-font-size:12.0pt;}
span.s0
{mso-style-name:s0;
mso-style-unhide:no;
mso-ansi-font-size:10.0pt;
mso-bidi-font-size:10.0pt;
font-family:"Times New Roman",serif;
mso-ascii-font-family:"Times New Roman";
mso-hansi-font-family:"Times New Roman";
mso-bidi-font-family:"Times New Roman";
color:black;
mso-text-animation:none;
font-weight:normal;
font-style:normal;
text-decoration:none;
text-underline:none;
text-decoration:none;
text-line-through:none;}
span.s20
{mso-style-name:s20;
mso-style-unhide:no;
background:white;}
span.BalloonTextChar
{mso-style-name:"Balloon Text Char";
mso-style-unhide:no;
mso-style-locked:yes;
mso-style-link:"Balloon Text";
mso-ansi-font-size:8.0pt;
mso-bidi-font-size:8.0pt;
font-family:"Tahoma",sans-serif;
mso-ascii-font-family:Tahoma;
mso-hansi-font-family:Tahoma;
mso-bidi-font-family:Tahoma;}
span.CommentTextChar
{mso-style-name:"Comment Text Char";
mso-style-unhide:no;
mso-style-locked:yes;
mso-style-link:"Comment Text";}
span.CommentSubjectChar
{mso-style-name:"Comment Subject Char";
mso-style-unhide:no;
mso-style-locked:yes;
mso-style-parent:"Comment Text Char";
mso-style-link:"Comment Subject";
font-weight:bold;}
span.SpellE
{mso-style-name:"";
mso-spl-e:yes;}
span.GramE
{mso-style-name:"";
mso-gram-e:yes;}
.MsoChpDefault
{mso-style-type:export-only;
mso-default-props:yes;
font-size:10.0pt;
mso-ansi-font-size:10.0pt;
mso-bidi-font-size:10.0pt;
mso-ansi-language:RU;
mso-fareast-language:RU;}
 /* Page Definitions */
 @page
{mso-mirror-margins:yes;
mso-footnote-separator:url("page-as-html.fld/header.html") fs;
mso-footnote-continuation-separator:url("page-as-html.fld/header.html") fcs;
mso-endnote-separator:url("page-as-html.fld/header.html") es;
mso-endnote-continuation-separator:url("page-as-html.fld/header.html") ecs;}
@page WordSection1
{size:595.3pt 841.9pt;
margin:1.0cm 1.0cm 1.0cm 1.0cm;
mso-header-margin:35.45pt;
mso-footer-margin:35.45pt;
mso-gutter-margin:14.2pt;
mso-footer:url("page-as-html.fld/header.html") f1;
mso-paper-source:0;}
div.WordSection1
{page:WordSection1;}
 /* List Definitions */
 @list l0
{mso-list-id:1703968677;
mso-list-type:hybrid;
mso-list-template-ids:-2025009168 68747279 68747289 68747291 68747279 68747289 68747291 68747279 68747289 68747291;}
@list l0:level1
{mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:18.0pt;
text-indent:-18.0pt;}
@list l0:level2
{mso-level-number-format:alpha-lower;
mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:54.0pt;
text-indent:-18.0pt;}
@list l0:level3
{mso-level-number-format:roman-lower;
mso-level-tab-stop:none;
mso-level-number-position:right;
margin-left:90.0pt;
text-indent:-9.0pt;}
@list l0:level4
{mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:126.0pt;
text-indent:-18.0pt;}
@list l0:level5
{mso-level-number-format:alpha-lower;
mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:162.0pt;
text-indent:-18.0pt;}
@list l0:level6
{mso-level-number-format:roman-lower;
mso-level-tab-stop:none;
mso-level-number-position:right;
margin-left:198.0pt;
text-indent:-9.0pt;}
@list l0:level7
{mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:234.0pt;
text-indent:-18.0pt;}
@list l0:level8
{mso-level-number-format:alpha-lower;
mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:270.0pt;
text-indent:-18.0pt;}
@list l0:level9
{mso-level-number-format:roman-lower;
mso-level-tab-stop:none;
mso-level-number-position:right;
margin-left:306.0pt;
text-indent:-9.0pt;}
@list l1
{mso-list-id:1930233737;
mso-list-template-ids:-1192974254;}
@list l1:level1
{mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:18.0pt;
text-indent:-18.0pt;
mso-ansi-font-weight:bold;}
@list l1:level2
{mso-level-legal-format:yes;
mso-level-text:"%1\\.%2\\.";
mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:36.0pt;
text-indent:-36.0pt;}
@list l1:level3
{mso-level-legal-format:yes;
mso-level-text:"%1\\.%2\\.%3\\.";
mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:36.0pt;
text-indent:-36.0pt;}
@list l1:level4
{mso-level-legal-format:yes;
mso-level-text:"%1\\.%2\\.%3\\.%4\\.";
mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:54.0pt;
text-indent:-54.0pt;}
@list l1:level5
{mso-level-legal-format:yes;
mso-level-text:"%1\\.%2\\.%3\\.%4\\.%5\\.";
mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:54.0pt;
text-indent:-54.0pt;}
@list l1:level6
{mso-level-legal-format:yes;
mso-level-text:"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.";
mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:72.0pt;
text-indent:-72.0pt;}
@list l1:level7
{mso-level-legal-format:yes;
mso-level-text:"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.%7\\.";
mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:90.0pt;
text-indent:-90.0pt;}
@list l1:level8
{mso-level-legal-format:yes;
mso-level-text:"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.%7\\.%8\\.";
mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:90.0pt;
text-indent:-90.0pt;}
@list l1:level9
{mso-level-legal-format:yes;
mso-level-text:"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.%7\\.%8\\.%9\\.";
mso-level-tab-stop:none;
mso-level-number-position:left;
margin-left:108.0pt;
text-indent:-108.0pt;}
ol
{margin-bottom:0cm;}
ul
{margin-bottom:0cm;}
-->
</style>
`;

export const getHead = (title = 'Документ'): string => `
  <head>
    ${getMetaTags()}
    ${getXMLMetaData()}
    <title>${title}</title>
    ${getStyles()}
  </head>
`;

export const getBody = (html: string): string => `
  <body lang=en-KG link=navy vlink=purple style='tab-interval:35.4pt;word-wrap:break-word'>
   <div class=WordSection1>
     ${html}
   </div>
  </body>
`;

export const getDefaultWordTemplate = (html: string, title: string): string =>
  `<html
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:w="urn:schemas-microsoft-com:office:word"
    xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
    xmlns="http://www.w3.org/TR/REC-html40"
   >
     ${getHead(title)}
     ${getBody(html)}
   </html>`;


export const generateValidHtmlForWord = (html: string, document: IAgreementDocument): string => {
  if (!document.html_layout) {
    return getDefaultWordTemplate(html, document.name);
  }
  return document.html_layout.replace('{content}', getBody(html));
};

export default generateValidHtmlForWord;
