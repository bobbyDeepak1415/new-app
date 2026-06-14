import React, { useState, useEffect } from "react";
import useFetchData from "./useFetchData";

export default function Demo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Local debounce handling
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchTerm);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  // Consume hook with the debounced query string
  const { results, isLoading, error } = useFetchData(debouncedQuery);

  return (
    <div
      style={{ padding: "20px", maxWidth: "400px", fontFamily: "sans-serif" }}
    >
      <label
        htmlFor="product-search"
        style={{ fontWeight: "bold", display: "block", marginBottom: "8px" }}
      >
        Search Products
      </label>
      <input
        id="product-search"
        type="text"
        placeholder="Type to search products (e.g., phone, laptop)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          boxSizing: "border-box",
        }}
      />

      {/* UI State Blocks */}
      <div style={{ marginTop: "15px" }}>
        {isLoading && <p style={{ color: "#666" }}>Loading products...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {!isLoading && !error && results.length > 0 && (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {results.map((product) => (
              <li
                key={product.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    marginRight: "12px",
                  }}
                />
                <div>
                  <h4 style={{ margin: "0 0 4px 0", fontSize: "15px" }}>
                    {product.title}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      color: "#2ecc71",
                      fontWeight: "bold",
                    }}
                  >
                    ${product.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {!isLoading && !error && results.length === 0 && (
          <p style={{ color: "#999" }}>
            No products found matching "{debouncedQuery}"
          </p>
        )}
      </div>
    </div>
  );
}
