import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to fetch products from DummyJSON with request cancellation.
 * @param {string} query - The debounced search term.
 * @returns {object} { results, isLoading, error }
 */
export default function useFetchData(query) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef(null);

  useEffect(() => {
    // Cancel any previous in-flight request immediately
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      // If query is empty, fetch all products, otherwise hit the search endpoint
      const url = query.trim()
        ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}&limit=5`
        : `https://dummyjson.com/products?limit=5`;

      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        // DummyJSON returns an object with a "products" array
        setResults(data.products || []);
      } catch (err) {
        if (err.name === "AbortError") {
          return; // Ignore intentional cancellations
        }
        setError(err.message || "Something went wrong");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { results, isLoading, error };
}
