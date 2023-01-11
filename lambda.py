import json

def lambda_handler(event, context):
    # TODO implement
#    name = event['params']['querystring']['personName']
#    name = event.personName
    name = event['queryStringParameters']['personName']
    
    return {
        'statusCode': 200,
        'body': json.dumps('Hello ' + name + ', from Lambda!')
    }
