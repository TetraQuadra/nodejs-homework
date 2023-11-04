const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");
const checkForDuplicate = require("../helpers/checkForDuplicate");

const contactsPath = path.resolve("./models/contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    throw new Error(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const contactById = contacts.find((contact) => contact.id === contactId);
    return contactById;
  } catch (error) {
    throw new Error(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const contactIndex = contacts.findIndex(
      (contact) => contact.id === contactId
    );
    if (contactIndex === -1) {
      return false;
    }
    contacts.splice(contactIndex, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

const addContact = async ({ name, email, phone }) => {
  const contact = { id: nanoid(), name, email, phone };
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  checkForDuplicate(contacts, contact);
  contacts.push(contact);
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contact;
  } catch (error) {
    throw new Error(error);
  }
};

const updateContact = async (contactId, { name, email, phone }) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  contacts[contactIndex] = {
    id: contacts[contactIndex].id,
    name,
    email,
    phone,
  };
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contacts[contactIndex];
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
