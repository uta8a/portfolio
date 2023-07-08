interface ContactCardProps {
  contact: {
    name: string;
    alias: string;
    url: string | null;
    comment: string | null;
  }[];
}

export default function ContactCards(props: ContactCardProps) {
  return (
    <div class="grid">
      {props.contact.map((contact) => (
        <div class="grid grid-cols-3 py-2">
          <div>{contact.name}</div>
          {contact.url === null
            ? (
              <div class="text-gray-500">
                {contact.alias}
              </div>
            )
            : (
              <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                class="font-bold underline"
              >
                {contact.alias}
              </a>
            )}
          <div class="text-gray-500">{contact.comment}</div>
        </div>
      ))}
    </div>
  );
}
