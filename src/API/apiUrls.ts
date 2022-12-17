export enum ApiUrls {
  refreshToken = '/auth/refresh-token/',
  signIng = '/auth/sign-in/',
  changePassword = '/auth/change-password/',

  me = '/user/me/',

  objectsList = '/objective',
  objectsAttachments = '/objective/attachments',
  objectsListSearch = '/objective/search/',
  history = '/history/',

  ordersList = '/documents/orders/',
  uploadOrderAttachment = '/documents/orders/attachment/upload/',
  deleteOrderAttachment = '/documents/orders/attachments/',

  documentList = '/documents/templates/',
  downloadAgreementDocument = '/documents/templates/convert/',

  customer = '/customers',
  uploadCustomerAttachment = '/customers/attachments',
  powerOfAttorney = '/power-of-attorney',

  adminsList = '/user/',
  createRentalAgreement = '/documents/rental-agreement/create/',
  renewRentalAgreement = '/documents/rental-agreement/renewal/',
  subRentAgreement = '/documents/rental-agreement/sub-rent/',
  claimWorks = '/documents/claims/create/',
  rentalAgreementDocumentDetail = '/documents/rental-agreement/documents/:id/',
}
