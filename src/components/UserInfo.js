export default class UserInfo {
  constructor(selectorName, selectorJob, selectorAvatar) {
    this._selectorName = selectorName;
    this._selectorJob = selectorJob;
    this._selectorAvatar = selectorAvatar;
    this._name = document.querySelector(this._selectorName);
    this._job = document.querySelector(this._selectorJob);
    this._avatar = document.querySelector(this._selectorAvatar);
  }

  getUserInfo() {
    this._user = {
      name: this._name.textContent,
      about: this._job.textContent
    };
    return this._user;
  }

  //устанавливаем аватар
  setUserAvatar(linkAvatar) {
    if (linkAvatar) {
      this._avatar.src = linkAvatar;
    } else {
      this._avatar.src = 'https://www.boredpanda.com/blog/wp-content/uploads/2018/07/BbxQjM6HycS-png__700.jpg';
    }
  }

  setUserInfo(user) {
    this._name.textContent = user.name;
    this._job.textContent = user.about;
    this.setUserAvatar(user.avatar);
  }
}
