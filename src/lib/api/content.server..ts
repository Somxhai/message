import type { ContentType } from "$lib/types";
import { error } from "@sveltejs/kit";
import request, { gql } from "graphql-request";

export const getContentById = async (contentId: string) => {
  const url = import.meta.env.VITE_CONTENT_URL;
  const query = gql`
    {
        view(where: { id: "${contentId}" }) {
          name
          content {
            html
          }
          properties
        }
      }
    `;
  const result = await request(url, query)
    .then((data: ContentType) => {
      if (!data.view) {
        throw error(404, {
          message: "Content not found",
        });
      }
      return data;
    })
    .catch(() => {
      throw error(404, {
        message: "Content not found",
      });
    });

  return result;
};
