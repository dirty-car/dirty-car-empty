// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBlockFields {
  /** Entry Name */
  entryName: string;

  /** Slug */
  slug?: string | undefined;

  /** Title */
  title?: string | undefined;

  /** Content */
  content?: Document | undefined;

  /** Button */
  button?: IComponentLink | undefined;

  /** Image */
  image?: IImage | undefined;

  /** Components */
  components?: (IBlock | IText | ICard | IComponentLink)[] | undefined;
}

export interface IBlock extends Entry<IBlockFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "Block";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ICardFields {
  /** Entry Name */
  entryName?: string | undefined;

  /** Slug */
  slug?: string | undefined;

  /** Image */
  image?: Asset | undefined;

  /** Title */
  title?: string | undefined;

  /** Description */
  description?: Document | undefined;
}

export interface ICard extends Entry<ICardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "card";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IComponentAuthorFields {
  /** Internal name */
  internalName: string;

  /** Name */
  name: string;

  /** Avatar */
  avatar?: Asset | undefined;
}

/** To have author-related properties */

export interface IComponentAuthor extends Entry<IComponentAuthorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "componentAuthor";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IComponentLinkFields {
  /** Entry Name */
  entryName: string;

  /** Slug */
  slug?: string | undefined;

  /** Title */
  title?: string | undefined;

  /** Image */
  image?: Asset | undefined;

  /** Link */
  link: string;

  /** Anchor */
  anchor?: IText | undefined;
}

export interface IComponentLink extends Entry<IComponentLinkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "componentLink";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IComponentRichImageFields {
  /** Internal name */
  internalName: string;

  /** Image */
  image: Asset;

  /** Caption */
  caption?: string | undefined;

  /** Full width */
  fullWidth?: boolean | undefined;
}

/** To describe an image used in rich text fields */

export interface IComponentRichImage extends Entry<IComponentRichImageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "componentRichImage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IComponentSeoFields {
  /** Internal name */
  internalName: string;

  /** Page title */
  pageTitle: string;

  /** Page description */
  pageDescription?: string | undefined;

  /** Canonical URL */
  canonicalUrl?: string | undefined;

  /** nofollow */
  nofollow: boolean;

  /** noindex */
  noindex: boolean;

  /** Share images */
  shareImages?: Asset[] | undefined;
}

/** To have SEO-related properties to the pages we render */

export interface IComponentSeo extends Entry<IComponentSeoFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "componentSeo";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IImageFields {
  /** Entry Name */
  entryName: string;

  /** Slug */
  slug?: string | undefined;

  /** Height */
  height?: string | undefined;

  /** Width */
  width?: string | undefined;

  /** Media */
  media?: Asset | undefined;
}

export interface IImage extends Entry<IImageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "image";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Entry Name */
  entryName: string;

  /** Slug */
  slug?: string | undefined;

  /** Header */
  header?: IBlock | undefined;

  /** SEO */
  seo?: IComponentSeo | undefined;

  /** Sections */
  sections?: ISection[] | undefined;
}

/** Page that will have SEO field that contains ref to SEO content type, array of sections */

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageBlogPostFields {
  /** Internal name */
  internalName: string;

  /** SEO fields */
  seoFields?: IComponentSeo | undefined;

  /** Slug */
  slug: string;

  /** Author */
  author?: IComponentAuthor | undefined;

  /** Published date */
  publishedDate: string;

  /** Title */
  title: string;

  /** Subtitle */
  shortDescription?: string | undefined;

  /** Featured image */
  featuredImage: Asset;

  /** Content */
  content: Document;

  /** Related blog posts */
  relatedBlogPosts?: IPageBlogPost[] | undefined;
}

/** To create individual blog posts */

export interface IPageBlogPost extends Entry<IPageBlogPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageBlogPost";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageLandingFields {
  /** Internal name */
  internalName: string;

  /** SEO fields */
  seoFields?: IComponentSeo | undefined;

  /** Featured blog post */
  featuredBlogPost?: IPageBlogPost | undefined;
}

/** To have an entry point for the app (e.g. Homepage) */

export interface IPageLanding extends Entry<IPageLandingFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageLanding";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionFields {
  /** Entry Name */
  entryName: string;

  /** Type */
  type: "products" | "description" | "products-table";

  /** ID */
  id?: IText | undefined;

  /** Components */
  components: (IText | IComponentLink | ICard | IBlock)[];
}

export interface ISection extends Entry<ISectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "Section";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITextFields {
  /** Entry Name */
  entryName: string;

  /** Slug */
  slug?: string | undefined;

  /** Short Text */
  shortText?: string | undefined;

  /** Long Text */
  longText?: string | undefined;
}

export interface IText extends Entry<ITextFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "text";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "Block"
  | "card"
  | "componentAuthor"
  | "componentLink"
  | "componentRichImage"
  | "componentSeo"
  | "image"
  | "page"
  | "pageBlogPost"
  | "pageLanding"
  | "Section"
  | "text";

export type IEntry =
  | IBlock
  | ICard
  | IComponentAuthor
  | IComponentLink
  | IComponentRichImage
  | IComponentSeo
  | IImage
  | IPage
  | IPageBlogPost
  | IPageLanding
  | ISection
  | IText;

export type LOCALE_CODE = "ru" | "zh";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "ru";
