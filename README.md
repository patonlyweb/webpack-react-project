# webpack-react-project


## Usage

Build via yarn :

    yarn build

Puis on sert le site via un docker nginx en montant le site dans le container (d'ailleurs si on laisse tourner le container, on a pas besoin de le relancer si on rebuild):

    docker-compose -f docker-compose-dev.yml up -d
    

## Usage full docker


### Build

Via compose :

    docker-compose build
   
sinon à la main :
       
    docker build -t pperroudon/webpack-react-project

 

### Run

Via compose :

    docker-compose up -d

sinon à la main :
       
    docker run -d -p 80:80 pperroudon/webpack-react-project

