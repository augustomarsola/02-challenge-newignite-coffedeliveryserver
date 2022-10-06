// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  description: string;
  price: number;
  tags: string[];
  imgUrl: string;
}[];

const coffees = [
  {
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    tags: ["tradicional"],
    imgUrl: "/coffee/Image-1.png",
  },
  {
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 10.9,
    tags: ["tradicional"],
    imgUrl: "/coffee/Image-2.png",
  },
  {
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 11.9,
    tags: ["tradicional"],
    imgUrl: "/coffee/Image-3.png",
  },
  {
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 10.9,
    tags: ["tradicional", "gelado"],
    imgUrl: "/coffee/Image-4.png",
  },
  {
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 10.9,
    tags: ["tradicional", "com leite"],
    imgUrl: "/coffee/Image-5.png",
  },
  {
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 11.9,
    tags: ["tradicional", "com leite"],
    imgUrl: "/coffee/Image-6.png",
  },
  {
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 12.9,
    tags: ["tradicional", "com leite"],
    imgUrl: "/coffee/Image-7.png",
  },
  {
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 12.9,
    tags: ["tradicional", "Com leite"],
    imgUrl: "/coffee/Image-8.png",
  },
  {
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 12.9,
    tags: ["tradicional", "com leite"],
    imgUrl: "/coffee/Image-9.png",
  },
  {
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 13.9,
    tags: ["especial", "com leite"],
    imgUrl: "/coffee/Image-10.png",
  },
  {
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 15.9,
    tags: ["Especial", "alcoólico", "gelado"],
    imgUrl: "/coffee/Image-11.png",
  },
  {
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 14.9,
    tags: ["especial"],
    imgUrl: "/coffee/Image-12.png",
  },
  {
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 15.9,
    tags: ["especial"],
    imgUrl: "/coffee/Image-13.png",
  },
  {
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 17.9,
    tags: ["especial", "alcoólico"],
    imgUrl: "/coffee/Image-14.png",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(coffees);
}
