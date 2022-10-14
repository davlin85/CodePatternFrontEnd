import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: "eu-north-1_sRWHuOGY7",
    ClientId: "5a0588q247gu6919tpfcki2r86"
}

export default new CognitoUserPool(poolData);