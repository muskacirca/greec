package org.muskacirca.greec.content;

import org.muskacirca.greec.content.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/users")
@Stateless
public class Users {

    private final static Logger LOG = LoggerFactory.getLogger(Users.class);

    public Users() {
    }

    @Inject
    public Users(UserFinder userFinder) {
        this.userFinder = userFinder;
    }

    UserFinder userFinder;

    @GET
    @Path("/{login}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public User findByLogin(@NotNull @PathParam("login") String login) {
        User user = userFinder.findByLogin("login");
        LOG.debug("found user : " + user);
        return user;
    }

}
