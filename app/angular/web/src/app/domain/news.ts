import { Record } from 'immutable';

export const NewsRecord = Record(
{
  author:      null,
  description: null,
  image_url:   null,
  publishedAt: null,
  source:      null,
  title:       null,
  url:         null,
  urlToImage:  null,
  thumbnail:   null
});

export class News extends NewsRecord
{
  author:      string
  description: string
  image_url:   string
  publishedAt: string
  source:      {}
  title:       string
  url:         string
  urlToImage:  string
  thumbnail:   string

  /**
   * @constructor
   */
  constructor(properties)
  {
    super(properties);
  }
}
