import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
    return (
        <section id="testimonials" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="What People Say About Me?"
                    sub="⭐️ Customer feedback highlights"
                />

                {/* Masonry (Pinterest style) layout */}
                <div className="lg:columns-3 md:columns-2 columns-1 mt-16 gap-6 pl-8 pb-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="mb-6 break-inside-avoid">
                            <GlowCard card={testimonial} index={index}>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <img
                                            src={testimonial.imgPath}
                                            alt={testimonial.name}
                                            className="rounded-full w-12 h-12 object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold">{testimonial.name}</p>
                                        <p className="text-white-50">{testimonial.mentions}</p>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
