/**https://developer.wordpress.org/rest-api/reference/ */
export namespace Wordpress {
  interface Html {
    rendered: string;
  }

  export namespace Post {
    export type QueryParams = {
      page?: number;
      /**
       * DEFAULTS:
       * page: 1
       * per_page: 10
       * context: "view"
       * order: "desc" by date
       * status: "publish"
       *
       */
    };
  }

  export type Post = {
    id: number;
    date: string;
    slug: string;
    title: Html;
    author: number;
    excerpt: Html;
    featured_media: number;
    content: Html;
  };

  /** custom type made from Post[] and response headers */
  export type PostPage = {
    posts: Post[];
    pageNum: number;
    nextPageNum?: number;
  };

  export namespace Media {
    export interface Size {
      file: string;
      width: number;
      height: number;
      filesize?: number;
      mime_type?: string;
      source_url?: string;
    }

    interface Sizes {
      medium: Size;
      large: Size;
      thumbnail: Size;
      medium_large: Size;
      "1536x1536": Size;
      "2048x2048": Size;
      "gainioz-case-details": Size;
      tenweb_optimizer_mobile: Size;
      tenweb_optimizer_tablet: Size;
      full: Omit<Size, "filesize">;
    }

    export interface Details {
      width: number;
      height: number;
      sizes: Sizes;
    }
  }

  export interface Media {
    guid: Html;
    alt_text: string;
    media_details: Media.Details;
  }

  export interface User {
    name: string;
  }
}
