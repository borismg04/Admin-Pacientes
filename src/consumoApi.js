/*curl -X POST \ya 
-H 'accept: application/json' \ ya 
-H 'content-type: application/x-www-form-urlencoded' \
'https://api.mercadolibre.com/oauth/token' \
-d 'grant_type=authorization_code' \
-d 'client_id=8592626295595638' \
-d 'client_secret=PQcNoI3HXcRMfkpMvfPzCnVi8FBFJeTn' \
-d 'code=TG-62cf40493a068b00135120db-356509063' \
-d 'redirect_uri=https://localhost/3000'*/ 

url = 'https://api.mercadolibre.com/oauth/token';

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    }
}
