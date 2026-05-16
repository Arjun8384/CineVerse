import Groq from "groq-sdk";

const groq = new Groq({
  apiKey:
    import.meta.env
      .VITE_GROQ_API_KEY,

  dangerouslyAllowBrowser: true,
});

export const getMovieRecommendation =
  async (mood) => {
    try {
      const completion =
        await groq.chat.completions.create(
          {
            model:
              "llama-3.1-8b-instant",

            messages: [
              {
                role: "system",

                content: `
You are a movie recommendation assistant.

Return ONLY ONE movie title.

No explanation.
No punctuation.
No extra text.
`,
              },

              {
                role: "user",

                content: mood,
              },
            ],

            temperature: 0.8,

            max_tokens: 20,
          }
        );

      return completion.choices[0]
        ?.message?.content?.trim();
    } catch (error) {
      console.error(
        "Groq Error:",
        error
      );

      throw new Error(
        "Failed to get AI recommendation."
      );
    }
  };