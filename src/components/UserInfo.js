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
      job: this._job.textContent
    };
    return this._user;
  }
  setUserInfo(user) {
    this._name.textContent = user.name;
    this._job.textContent = user.job;
    this._avatar.style.backgroundImage = `url(${user.avatar})`;
  }

}

//версия от 22.10 до исправлений, то есть та, которую я сделала из работ мальчиков
// export default class UserInfo {
//   constructor(selectorName, selectorJob, selectorAvatar) {
//     this._selectorName = selectorName;
//     this._selectorJob = selectorJob;
//     this._selectorAvatar = selectorAvatar;
//     this._name = document.querySelector(this._selectorName);
//     this._job = document.querySelector(this._selectorJob);
//     this._avatar = document.querySelector(this._selectorAvatar);
//   }

//   getUserInfo() {
//     this._user = {
//       name: this._name.textContent,
//       job: this._job.textContent
//     };
//     return this._user;
//   }
//   setUserInfo(user) {
//     this._name.textContent = user.name;
//     this._job.textContent = user.job;
//     this._avatar.style.backgroundImage = `url(${user.avatar})`;
//   }

// }