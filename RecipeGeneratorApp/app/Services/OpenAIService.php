<?php

namespace App\Services;

use GuzzleHttp\Client;

class OpenAIService
{
    protected $client;
    protected $apiKey;

    public function __construct()
    {
        $this->apiKey = env('OPENAI_API_KEY');
        $this->client = new Client([
            'base_uri' => 'https://api.openai.com/v1/',
            'headers' => [
                'Authorization' => "Bearer {$this->apiKey}",
                'Content-Type' => 'application/json',
            ],
        ]);
    }

    public function generateRecipe(array $ingredients, string $diet = null)
    {
        $ingredientList = implode(', ', $ingredients);
        $dietText = $diet ? " The recipe should be suitable for a {$diet} diet." : '';

        $prompt = "Create a detailed cooking recipe using these ingredients: {$ingredientList}.{$dietText} Provide the recipe title, list of ingredients needed, and step-by-step instructions.";

        $response = $this->client->post('chat/completions', [
            'json' => [
                'model' => 'gpt-4o-mini',  // or 'gpt-4o' if available
                'messages' => [
                    ['role' => 'user', 'content' => $prompt],
                ],
                'max_tokens' => 500,
                'temperature' => 0.7,
            ],
        ]);

        $result = json_decode($response->getBody(), true);

        return $result['choices'][0]['message']['content'] ?? 'No recipe generated.';
    }
}
