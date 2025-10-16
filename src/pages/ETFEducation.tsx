import React from 'react';
import { TrendingUpIcon, BrainCircuitIcon, InfoIcon } from 'lucide-react';
const ETFEducation: React.FC = () => {
  const etfData = [{
    name: 'Vanguard Total Stock Market ETF',
    ticker: 'VTI',
    yearReturn: '+15.2%',
    expenseRatio: '0.03%',
    value: '$258.72',
    aiInsight: 'Strong performer with broad market exposure. Recommended for long-term investors seeking diversification.'
  }, {
    name: 'iShares Core S&P 500 ETF',
    ticker: 'IVV',
    yearReturn: '+14.8%',
    expenseRatio: '0.03%',
    value: '$486.35',
    aiInsight: 'Consistent performer tracking the S&P 500 index. Solid choice for core portfolio holdings.'
  }, {
    name: 'Invesco QQQ Trust',
    ticker: 'QQQ',
    yearReturn: '+21.6%',
    expenseRatio: '0.20%',
    value: '$415.94',
    aiInsight: 'Tech-heavy ETF with strong growth potential but higher volatility. Consider as a growth component.'
  }, {
    name: 'SPDR Gold Shares',
    ticker: 'GLD',
    yearReturn: '+8.7%',
    expenseRatio: '0.40%',
    value: '$201.48',
    aiInsight: 'Effective inflation hedge with moderate returns. Good for portfolio diversification during economic uncertainty.'
  }, {
    name: 'Vanguard ESG U.S. Stock ETF',
    ticker: 'ESGV',
    yearReturn: '+13.5%',
    expenseRatio: '0.09%',
    value: '$89.76',
    aiInsight: 'Strong performer with environmental and social governance focus. Attractive for socially conscious investors.'
  }];
  return <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">ETF Education</h2>
        <p className="text-gray-600">
          Learn about Exchange-Traded Funds and discover potential investment
          opportunities.
        </p>
      </div>
      <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-4">
          <BrainCircuitIcon className="h-6 w-6 text-primary mr-2" />
          <h3 className="text-xl font-semibold">AI Market Insight</h3>
        </div>
        <div className="bg-primary-light/10 border border-primary-light/30 rounded-lg p-4">
          <p className="text-gray-700">
            <span className="font-medium">Today's Analysis:</span> Market
            conditions favor broad-based index ETFs with low expense ratios.
            Technology and healthcare sectors show strength, while bond ETFs may
            face challenges in the current interest rate environment. Consider
            diversifying with a mix of growth and value ETFs.
          </p>
        </div>
      </div>
      <h3 className="section-title">Featured ETFs</h3>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                ETF Name
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ticker
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                1Y Return
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Expense Ratio
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                AI Insight
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {etfData.map((etf, index) => <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{etf.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {etf.ticker}
                  </span>
                </td>
                <td className={`px-6 py-4 whitespace-nowrap ${etf.yearReturn.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {etf.yearReturn}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {etf.expenseRatio}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  {etf.value}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-start">
                    <InfoIcon className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                    <p className="text-sm text-gray-600">{etf.aiInsight}</p>
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-3">What are ETFs?</h3>
          <p className="text-gray-600 mb-4">
            Exchange-Traded Funds (ETFs) are investment funds traded on stock
            exchanges that hold assets such as stocks, bonds, or commodities,
            tracking an underlying index.
          </p>
          <button className="text-primary hover:underline flex items-center text-sm font-medium">
            Learn more
            <TrendingUpIcon className="ml-1 h-4 w-4" />
          </button>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-3">Benefits of ETFs</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Low expense ratios</li>
            <li>Trading flexibility</li>
            <li>Tax efficiency</li>
            <li>Diversification</li>
            <li>Transparency</li>
          </ul>
          <button className="text-primary hover:underline flex items-center text-sm font-medium">
            Learn more
            <TrendingUpIcon className="ml-1 h-4 w-4" />
          </button>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-3">ETF vs. Mutual Funds</h3>
          <p className="text-gray-600 mb-4">
            Unlike mutual funds, ETFs trade throughout the day at market prices,
            often have lower expense ratios, and typically have greater tax
            efficiency.
          </p>
          <button className="text-primary hover:underline flex items-center text-sm font-medium">
            Compare in detail
            <TrendingUpIcon className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>;
};
export default ETFEducation;