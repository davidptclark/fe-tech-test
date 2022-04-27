import axios from "axios";

const api = axios.create({
  baseURL: "https://interview-assessment.api.avamae.co.uk/api/v1",
});

export const getCarouselData = () => {
  return api
    .get("/home/banner-details")
    .then(({ data: { Details } }) => Details);
};

export const postContactData = (data) => {
  return api
    .post("/contact-us/submit", data)
    .then(({ status }) => status)
    .catch((error) => {
      return error.response;
    });
};
