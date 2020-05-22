/**
 *  { a:"a", b:2,c: {value: c, type:"string"} } ->
 *  [{name:a, value:"a"}, {name: b, value:"2"}, {name:c, value:"c"}]
 */
const convertEnvParams = (data: any) => {
  const result: any[] = [];
  // tslint:disable-next-line: no-loop-statement
  for (const [key, val] of Object.entries(data)) {
    if (typeof val === "object") {
      let temp: any = {};
      temp = val;

      if (
        val !== null &&
        (temp.value !== undefined || temp.secret !== undefined)
      ) {
        // tslint:disable-next-line: no-array-mutation
        result.push({
          name: key,
          value: temp.value || (temp.secret !== undefined && "*****"),
          type: temp.type,
        });
      }
    } else {
      // tslint:disable-next-line: no-array-mutation
      result.push({
        name: key,
        value: val,
      });
    }
  }
  // console.log('result: ', result);
  return result;
};
