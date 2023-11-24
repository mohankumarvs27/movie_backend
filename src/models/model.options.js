const modelOptions = {
  toJSON: {
    virtuals: true,
    tranform: (_, obj) => {
      delete obj.id;
      return obj;
    },
  },
  toObject: {
    virtuals: true,
    tranform: (_, obj) => {
      delete obj._id;
      return obj;
    },
  },
  versionKey: false,
  timestamps: true,
};

export default modelOptions;
