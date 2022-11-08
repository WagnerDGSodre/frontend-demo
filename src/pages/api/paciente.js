// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json( [
   
      {
        "id": 1,
        "nome": "João Sousa",
        "email": "joao@email.com",
        "cpf": "joao@email.com"
      },
      {
        "id": 2,
        "nome": "Maria Silva",
        "email": "maria@email.com",
        "cpf": "maria@email.com"
      },
      {
        "id": 3,
        "nome": "José Campos",
        "email": "jose@email.com",
        "cpf": "jose@email.com"
      },
      {
        "id": 4,
        "nome": "Ana Oliveira",
        "email": "ana@email.com",
        "cpf": "ana@email.com"
      }
    




    ]


   )
}
