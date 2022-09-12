export default class UserInfo {
  constructor(selectorName, selectorJob) {
    this._selectorName = selectorName;
    this._selectorJob = selectorJob;
    this._name = document.querySelector(this._selectorName);
    this._job = document.querySelector(this._selectorJob);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent
    };
  }

  setUserInfo(newName, newJob) {
    this._name.textContent = newName;
    this._job.textContent = newJob;
  }
}




// export default class UserInfo {
//   constructor(selectorName, selectorJob) {
//     this._name = document.querySelector(selectorName);
//       this._job = document.querySelector(selectorJob);
//   }

//   getUserInfo() {
//     return {
//       name: this._name.textContent,
//       job: this._job.textContent
//     };
//   }

//   setUserInfo(newName, newJob) {
//     this._name.textContent = newName;
//     this._job.textContent = newJob;
//   }
// }