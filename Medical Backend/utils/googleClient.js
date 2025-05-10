const {google}=require('googleapis');

const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET;

exports.oauth2Client=new google.auth.OAuth2(
    "841901412797-av03el1c3novg5j0mckvdmmcijhcdb7p.apps.googleusercontent.com",
    "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",
    'postmessage'
);