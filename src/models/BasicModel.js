import Model from './Model';

/**
 * The DAC, Milestone and Campaign base model containing basic common interface
 */
class BasicModel extends Model {
  constructor({
    _id, title = '', description = '', summary = '', image = '', txHash, owner, totalDonated = '0', donationCount = 0,
  }) {
    super();

    this.id = _id;
    this.title = title;
    this.description = description;
    this.summary = summary;
    this.image = image;
    this.newImage = false;
    this.txHash = txHash;
    this.owner = owner;
    this.totalDonated = totalDonated;
    this.donationCount = donationCount;
  }

  get id() {
    return this.myId;
  }

  set id(value) {
    this.checkType(value, ['undefined', 'string'], 'id');
    this.myId = value;
  }

  get title() {
    return this.myTitle;
  }

  set title(value) {
    this.checkType(value, ['string'], 'title');
    this.myTitle = value;
  }

  get description() {
    return this.myDescription;
  }

  set description(value) {
    this.checkType(value, ['string'], 'description');
    this.myDescription = value;
  }

  get summary() {
    return this.mySummary;
  }

  set summary(value) {
    this.checkType(value, ['string'], 'summary');
    this.mySummary = value;
  }

  get image() {
    return this.myImage;
  }

  set image(value) {
    this.checkType(value, ['string'], 'image');
    this.newImage = true;
    this.myImage = value;
  }

  get txHash() {
    return this.myTxHash;
  }

  set txHash(value) {
    this.checkType(value, ['undefined', 'string'], 'txHash');
    this.myTxHash = value;
  }

  get owner() {
    return this.myOwner;
  }

  set owner(value) {
    this.checkType(value, ['undefined', 'object'], 'owner');
    this.myOwner = value;
  }

  get totalDonated() {
    return this.myTotalDonated;
  }

  set totalDonated(value) {
    this.checkType(value, ['string'], 'totalDonated');
    this.myTotalDonated = value;
  }

  get donationCount() {
    return this.myDonationCount;
  }

  set donationCount(value) {
    this.checkType(value, ['number'], 'donationCount');
    this.myDonationCount = value;
  }
}

export default BasicModel;
