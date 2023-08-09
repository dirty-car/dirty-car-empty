import { IBlock, IBlockFields, ICardFields } from "@/__generated/contentful";
import Image from 'next/image';
import { FC } from "react";
import { IProductCard } from "./declarations";

const ProductCard: FC<IProductCard> = ({ card }) => {
    if (!card?.fields) {
        return null;
    }

    const cardFields = card.fields as ICardFields;

    return <div>
        <h3>  {cardFields.title}</h3>
        {/* <p>{cardFields.description}</p> */}
       {/* <Image src={cardFields.image?.fields.file?.url?.toString()!} /> */}
    </div>

}

export default ProductCard;