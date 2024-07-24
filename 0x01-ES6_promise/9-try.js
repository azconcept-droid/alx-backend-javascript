export default function guardrail(mathFunction) {
    const queue = new Array();
    try {
        queue.push(mathFunction());
        queue.push('Guardrail was processed')
    } catch (error) {
        queue.push(error);
        queue.push('Guardrail was processed')
    }
    return queue;
}