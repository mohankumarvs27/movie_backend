const responseWithData = (res, statusCode, data) =>
  res.status(statusCode).json(data);

const error = (res) =>
  responseWithData(res, 500, {
    status: 500,
    message: "Oops! Something Worng!",
  });

const badrequest = (res, message) =>
  responseWithData(res, 400, {
    status: 400,
    message,
  });

const ok = (res, data) => responseWithData(res, 200, data);

const created = (res, data) => responseWithData(res, 201, data);

const unauthorize = (res) =>
  responseWithData(res, 401, {
    sataus: 401,
    meassage: "Unathorized",
  });

const notfound = (res) =>
  responseWithData(res, 401, {
    status: 404,
    message: "Resources not Found",
  });

export default {
  error,
  badrequest,
  ok,
  unauthorize,
  notfound,
};
