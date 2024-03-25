import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Icon from "../Icon/Icon";

const FAQ = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="grid grid-cols-5 gap-12 mx-28 mt-28 items-center">
            <div className="col-span-3">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)} className="text-2xl">How can I submit my book for review on your website?</AccordionHeader>
                    <AccordionBody>
                        <p className="text-lg">
                            To submit a book for review, please visit our &quot;Submit a Book&quot; page and fill out the form with the necessary details about your book.
                        </p>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)} className="text-2xl">
                        Are your reviews biased or independent?
                    </AccordionHeader>
                    <AccordionBody>
                        <p className="text-lg">
                            Our reviews are completely independent and unbiased. We strive to provide honest and objective evaluations of each book we review.
                        </p>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)} className="text-2xl">
                        Can I request a specific book to be reviewed?
                    </AccordionHeader>
                    <AccordionBody>
                        <p className="text-lg">
                            Absolutely! We welcome requests for specific books to be reviewed. You can submit your request through our &quot;Contact Us&quot; page, and we&apos;ll do our best to accommodate it.
                        </p>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(4)} className="text-2xl">
                        Do you offer recommendations based on personal preferences?
                    </AccordionHeader>
                    <AccordionBody>
                        <p className="text-lg">
                            Yes, we offer personalized recommendations based on your reading preferences. You can fill out our &quot;Recommendation Form&quot; with details about your favorite genres, authors, and themes, and we&apos;ll suggest books tailored to your interests.
                        </p>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(5)} className="text-2xl">
                        How frequently are new reviews published on your website?
                    </AccordionHeader>
                    <AccordionBody>
                        <p className="text-lg">
                            We aim to publish new reviews regularly to keep our readers informed about the latest literary releases. Typically, we post new reviews multiple times per week, so be sure to check back frequently for fresh content.
                        </p>
                    </AccordionBody>
                </Accordion>
            </div>
            <div className="col-span-2"><img src="https://i.ibb.co/J3pMbjj/2317953.jpg" className="rounded-lg" alt="" /></div>
        </div>
    );
};

export default FAQ;