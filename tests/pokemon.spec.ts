import { test } from '@playwright/test';

test('it has an input for pokemin', async ({ page }) => {
    await page.goto('/pokemon-search')
    page.getByTestId('search')
}); 
