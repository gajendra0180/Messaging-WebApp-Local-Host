import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <>
      <div className="text-white">
        Here goes all your contacts.To start Conversation with any member please
        move to conversations and select any contact to start conversation.
      </div>
      <ListGroup variant="flush" style={{ width: "100vw" }}>
        {contacts.map((contact) => (
          <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
