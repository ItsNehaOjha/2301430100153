const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhMjAyM2NzZTk3MTFAaW1zZWMuYWMuaW4iLCJleHAiOjE3ODA4OTg0MzUsImlhdCI6MTc4MDg5NzUzNSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjY3NGVmZTI3LWFkOTQtNGI4Mi05NjhiLWQ4MmRmMDg4MTkzYiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im5laGEgb2poYSIsInN1YiI6ImY5ZDdmN2I3LTI1ZTgtNGE1Zi04NTRmLTQyOTc2ZjYzZDgzMSJ9LCJlbWFpbCI6ImEyMDIzY3NlOTcxMUBpbXNlYy5hYy5pbiIsIm5hbWUiOiJuZWhhIG9qaGEiLCJyb2xsTm8iOiIyMzAxNDMwMTAwMTUzIiwiYWNjZXNzQ29kZSI6Im55WFFNdSIsImNsaWVudElEIjoiZjlkN2Y3YjctMjVlOC00YTVmLTg1NGYtNDI5NzZmNjNkODMxIiwiY2xpZW50U2VjcmV0IjoiU1FCTnZ3ZHNRcVhleEZ4SCJ9.obfE6O_6Jf1_viBdcXfcVN9NV8MnC0UQYBrUvBIPNWw";

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    console.log(response.data);

  } catch (error) {
    console.log(
      error.response?.data || error.message
    );
  }
}

module.exports = Log;