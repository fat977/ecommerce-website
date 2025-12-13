'use client';

import { useState } from 'react';
import Button from '../_components/ui/buttons/Button';
import { formatDate } from '../utils/date';
import dynamic from 'next/dynamic';


const StarRating = dynamic(() => import('../_components/ui/StarRating'), { ssr: false });

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState('details');

  const tabs = [
    { id: 'details', label: 'Product Details ' },
    { id: 'reviews', label: 'Product Reviews' },
    { id: 'shipping', label: 'Shipping & returns ' },
  ];

  return (
    <div className="my-8 mx-auto w-full max-w-4xl">
      {/* Tabs Header */}
      <div className="flex flex-wrap border-b border-primary-200">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold transition ${
              activeTab === tab.id
                ? 'text-primary-900'
                : 'text-primary-600 hover:text-primary-900'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 h-1 w-full rounded-full bg-primary-900" />
            )}
          </Button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-4 sm:mt-6 dark:bg-primary-950 p-4 sm:p-6 rounded-lg shadow-sm space-y-4 sm:space-y-5 text-sm sm:text-base">
        {activeTab === 'details' && (
          <>
            <p className="leading-relaxed text-gray-700 dark:text-gray-200">
              {product.description}
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-primary-200 border border-primary-200 rounded-lg">
                <tbody className="bg-white dark:bg-primary-900 divide-y divide-primary-200">
                  {[
                    ['Category', product.category],
                    ['Brand', product.brand],
                    ['SKU', product.sku],
                    ['Stock', product.stock],
                    ['Weight', product.weight],
                    [
                      'Dimensions',
                      Object.entries(product.dimensions).map(([k, v]) => `${k}: ${v}`),
                    ],
                  ].map(
                    ([label, value]) =>
                      value && (
                        <tr key={label}>
                          <td className="px-3 sm:px-4 py-2 font-semibold text-gray-700 dark:text-gray-200">
                            {label}
                          </td>
                          <td className="px-3 sm:px-4 py-2 text-gray-900 dark:text-gray-100">
                            {Array.isArray(value)
                              ? value.map((v, i) => <p key={i}>{v}</p>)
                              : value}
                          </td>
                        </tr>
                      ),
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'reviews' &&
          product.reviews.map((review, i) => (
            <div
              key={i}
              className="p-3 sm:p-4 bg-white dark:bg-primary-900 rounded-lg shadow-sm space-y-1"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
                <p className="font-medium">{review.reviewerName}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  {formatDate(review.date)}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm">{review.rating}</p>
                <StarRating
                  maxRating={5}
                  size={18}
                  color="#fcc419"
                  defaultRating={review.rating}
                />
              </div>
              <p className="text-gray-700 dark:text-gray-200">{review.comment}</p>
            </div>
          ))}

        {activeTab === 'shipping' && (
          <>
            {['Shipping', 'Return Policy'].map((label) => (
              <div key={label}>
                <h3 className="text-lg sm:text-xl font-bold text-primary-900 dark:text-white">
                  {label}
                </h3>
                <p className="leading-relaxed text-gray-700 dark:text-gray-200">
                  {label === 'Shipping'
                    ? product.shippingInformation
                    : product.returnPolicy}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
