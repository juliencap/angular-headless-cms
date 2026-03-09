export interface Calendrier {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  acf: {
    content_group: {
      contenu: string;
    };
    saison: number[];
  };
}
