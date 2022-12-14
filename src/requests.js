import axios from "axios";
import { uid } from "uid";

export const postToGoogleSheet = (d) => {
  const data = {
    Email: d.email,
    Name: d.name,
    Phone: d.phone,
    Created: "x-sheetmonkey-current-date-time",
    Direction: "AMAZONAGARM",
    Answers: d.answer,
  };

  fetch("https://api.sheetmonkey.io/form/xvNBfrMZTXpbwwnu4R9oBV", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((result) => {});
};

export const postDataToCRM = (d) => {
  const url = `https://frnkaffs-api.com/api/v2/lead`;
  const password = uid();
  const data = {
    email: d.email,
    firstName: d.name,
    lastName: d.name,
    password: password,
    phone: d.phone,
    custom1: d.answer,
  };
  const requestOptions = {
    method: "post",
    url: url,
    data: data,
    headers: { "Api-Key": "6D0D404D-DF26-1A5E-A88D-E0ECC6A4E17E " },
  };
  axios(requestOptions)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
