import { ISection, ISectionFields } from "@/__generated/contentful";
import { ProductsExamples } from "./Sections/ProductsExamples";
import { ProductTable } from "./Sections/ProductTable";
import { Description } from "./Sections/Description";

export const getSection = (section: ISection) => {
    const sectionFields = section.fields as ISectionFields;

    switch (sectionFields.type) {
        case 'products': {
            return <ProductsExamples blocks={sectionFields.components} />;
        }
        case 'products-table': {
            return <ProductTable blocks={sectionFields.components} />;
        }
        case 'description': {
            return <Description blocks={sectionFields.components} />;
        }
        default: {
            return null;
        }
    }

}