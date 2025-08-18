import type {BuyerType} from "../types/buyer-info.ts";

/**
 * Calculates the Stamp Duty Land Tax (SDLT) for a residential property in England or Northern Ireland.
 * The calculation is based on a tiered system, where different rates apply to different
 * portions of the property's purchase price.
 *
 * @param {number} propertyPrice The full purchase price of the property.
 * @param {string} buyerType The type of buyer, which determines the tax rates.
 * - 'standard': For a UK resident buying a single main residence (not a first-time buyer).
 * - 'firstTimeBuyer': For a UK resident eligible for first-time buyer relief.
 * - 'additionalProperty': For a UK resident buying a second home or buy-to-let property.
 * @returns {string} The calculated SDLT amount, formatted as a string with a pound sign.
 */
export function calculateStampDuty(propertyPrice: number, buyerType: BuyerType): number {
    let totalDuty = 0;
    let remainingPrice = propertyPrice;

    // Handle the different buyer scenarios
    switch (buyerType) {
        case 'standard':
            // Rates for a standard UK resident purchase
            if (remainingPrice > 1500000) {
                totalDuty += (remainingPrice - 1500000) * 0.12;
                remainingPrice = 1500000;
            }
            if (remainingPrice > 925000) {
                totalDuty += (remainingPrice - 925000) * 0.10;
                remainingPrice = 925000;
            }
            if (remainingPrice > 250000) {
                totalDuty += (remainingPrice - 250000) * 0.05;
                remainingPrice = 250000;
            }
            if (remainingPrice > 125000) {
                totalDuty += (remainingPrice - 125000) * 0.02;
            }
            break;

        case 'firstTimeBuyer':
            // Rates for a first-time buyer eligible for relief
            if (remainingPrice > 500000) {
                // First-time buyer relief doesn't apply above £500,000, so revert to standard rates
                return calculateStampDuty(remainingPrice, 'standard');
            }
            if (remainingPrice > 300000) {
                totalDuty += (remainingPrice - 300000) * 0.05;
            }
            // No duty below £300,000 for a first-time buyer
            break;

        case 'additionalProperty':
            // Rates for an additional property (second home, buy-to-let)
            if (remainingPrice > 1500000) {
                totalDuty += (remainingPrice - 1500000) * 0.17;
                remainingPrice = 1500000;
            }
            if (remainingPrice > 925000) {
                totalDuty += (remainingPrice - 925000) * 0.15;
                remainingPrice = 925000;
            }
            if (remainingPrice > 250000) {
                totalDuty += (remainingPrice - 250000) * 0.10;
                remainingPrice = 250000;
            }
            if (remainingPrice > 125000) {
                totalDuty += (remainingPrice - 125000) * 0.07;
                remainingPrice = 125000;
            }
            totalDuty += remainingPrice * 0.05;
            break;
    }

    return totalDuty;
}