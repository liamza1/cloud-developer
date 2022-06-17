export const config = {
  "dev": {
    "username": "udagramstreakl",
    "password": "udagramstreakldev",
    "database": "udagramstreakldev",
    "host": "udagramstreakldev.c9btvaiglggp.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "udagramdev",
    "aws_media_bucket": "udagram-filestore-streakl-dev"
  },
  "jwt": {
    "secret": "notsospecificsecret"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
