package com.internship.sep.web;

import com.internship.sep.models.ReactionType;
import lombok.Data;

@Data
public class EventReactionDTO {
    private Long id;
    private Long eventId;
    private Long creatorId;
    private ReactionType type;
}
