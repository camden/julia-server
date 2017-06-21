import moment from 'moment';

import config from './config.json';

const getMockSubmissions = function() {
  return [
    {
      id: 1,
      authorName: "Camden",
      contentTitle: "best new feature",
      category: "Announcements",
      content: "content!",
      createdDate: moment().format("ddd, hA")
    },
    {
      id: 2,
      authorName: "Julia",
      contentTitle: "best new feature",
      category: "General Info",
      content: "<madcap>content goes here</madcap>"
    }
  ]
}

const fetchData = function(apiUrl) {
    const url = config.baseUrl + apiUrl;
    return fetch(url, {
      method: 'GET'
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((err) => {
          throw err;
        });
      }
      return res.json();
    });
}

module.exports = {
  getMockSubmissions,
  fetchData
};
