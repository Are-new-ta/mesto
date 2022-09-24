export default class UserInfo {
  constructor(selectorName, selectorJob) {
    this._selectorName = selectorName;
    this._selectorJob = selectorJob;
    this._name = document.querySelector(this._selectorName);
    this._job = document.querySelector(this._selectorJob);
  }

  getUserInfo() {
    this._user = {
      name: this._name.textContent,
      job: this._job.textContent
    };
    return this._user;
  }

  setUserInfo(name, job) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}
