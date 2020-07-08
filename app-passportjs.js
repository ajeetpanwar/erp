let express = require('express');
let app = express();

require('./config/express').configExpress(app);
require('./config/passport').configPassport(app);
require('./routes/user')(app);


app.listen(3001, () => {
    console.log("server running on port 3001");
});



// token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWplZXQiLCJhZ2UiOjI3fSwiaWF0IjoxNTg3MzA4Mzc0fQ.ilkx3iuCFzigZyRwnfOMDguFI_Cdgyochp9gxC7SlHI
