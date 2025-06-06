import Accordion from "../components/Accordion";

function AccordionPage() {

    const items = [
        {
            id: '1234',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want.'
        },
        {
            id: '5678',
            label: 'Can I use Javascript on a project?',
            content: 'You can use React on any project you want.'
        },
        {
            id: '9101',
            label: 'Can I use CSS on a project?',
            content: 'You can use React on any project you want.'
        }
    ];

    return <Accordion items={items} />;
}

export default AccordionPage;