user
 - username
 - email
 - role
 - id(auto-generated)

project
  - projectname(with number?)
  - description
  - id(auto-generated)

  - assignedpersonnel
    - username
    - email
    - role

  - ticketsforproject
    - title
    - submitter
    - developer
    - status
    - created(at)

ticket
  - title
  - projectname
  - developerassigned
  - submitter
  - project
  - ticketpriority
  - ticketstatus
  - tickettype
  - created(at)
  - updated
  - id(auto-generated)

  - tickethistory
    - property
    - oldvalue(who was assigned)
    - newvalue(who is now assigned)
    - datechanged

  - attachments
    - file
    - uploader
    - notes
    - created(at)



comments(for ticket)
  - commenter
  - message
  - created(at)
  - id(auto-generated)
