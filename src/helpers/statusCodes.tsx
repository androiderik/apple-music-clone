 export const failStatusCodes = (statusCode: any) => {

  const statusCodeList = [process.env.NEXT_PUBLIC_FAILED_LOGIN , process.env.NEXT_PUBLIC_FORBIDDEN]

 return  statusCodeList.some( statusList =>
    Number(statusList) === statusCode
    
  )
 }