import { giftCards, giftCardPurchaseUrl, giftCardBalanceUrl } from '../data/giftcards';
import { motion as Motion } from 'framer-motion';

// Gift icon component
const GiftIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        />
    </svg>
);

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
        },
    },
};

export default function EGiftCards() {
    return (
        <section className="py-16 bg-white section-decor">
            <div className="container-w">
                {/* Section Header */}
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-playfair text-ink mb-3">
                        eGift Cards
                    </h2>
                    <p className="text-ink/70 max-w-2xl mx-auto">
                        Give the gift of relaxation. Our digital gift cards are delivered instantly
                        and can be redeemed for any of our massage services.
                    </p>
                </Motion.div>

                {/* Gift Cards Grid */}
                <Motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {giftCards.map((card) => (
                        <Motion.div
                            key={card.id}
                            variants={cardVariants}
                            className="card h-full flex flex-col items-center text-center relative overflow-hidden group"
                        >


                            {/* Gift Icon with gradient background */}
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-beige/60 to-beige/30 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                <GiftIcon />
                            </div>

                            {/* Amount */}
                            <div className="text-3xl font-playfair text-primary font-bold mb-2">
                                {card.amount}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-ink mb-2">
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="text-ink/60 text-sm leading-relaxed mb-4 flex-1">
                                {card.description}
                            </p>

                            {/* Decorative divider */}
                            <div className="text-beige/70 mb-4">✦ ✧ ✦</div>

                            {/* Buy Button */}
                            <a
                                href={giftCardPurchaseUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary w-full"
                            >
                                Buy Now
                            </a>
                        </Motion.div>
                    ))}
                </Motion.div>

                {/* Balance Check Section */}
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-4 bg-beige/30 rounded-2xl px-8 py-5 border border-beige/50">
                        <div className="text-left">
                            <p className="text-ink font-medium">Already have a gift card?</p>
                            <p className="text-ink/60 text-sm">Check your balance online</p>
                        </div>
                        <a
                            href={giftCardBalanceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline whitespace-nowrap"
                        >
                            Check Balance
                        </a>
                    </div>
                </Motion.div>

                {/* Additional Info */}
                <Motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-8 text-center text-ink/50 text-sm"
                >
                    <p>
                        eGift Cards are delivered via email and never expire.
                        <br className="hidden sm:block" />
                        Add to Apple Wallet for easy access and redemption.
                    </p>
                </Motion.div>
            </div>
        </section>
    );
}
