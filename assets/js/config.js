const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY;
const serviceId = process.env.NEXT_PUBLIC_SERVICEID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATEID;

const config = {
    emailjs: {
        publicKey: publicKey,
        serviceId: serviceId,
        templateId: templateId
    }
};
