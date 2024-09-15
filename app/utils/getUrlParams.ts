export default (url: string): any => {
  const paramString = url.includes("?") ? url.split("?")[1].split("&") : [];
  const params: any = {};
  paramString.forEach((param: string) => {
    const paramSplit = param.split("=");
    params[paramSplit[0]] = paramSplit[1];
  });
  return params;
};
