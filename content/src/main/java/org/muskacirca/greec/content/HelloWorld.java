package org.muskacirca.greec.content;

import org.muskacirca.greec.content.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/")
@Stateless
public class HelloWorld {

    private final static Logger LOG = LoggerFactory.getLogger(HelloWorld.class);

    public HelloWorld() {
    }

    @Inject
    public HelloWorld(UserFinder userFinder) {
        this.userFinder = userFinder;
    }

    UserFinder userFinder;

    @GET
    @Path("helloworld")
    @Produces(MediaType.TEXT_PLAIN)
    public String helloWorld() {
        LOG.debug("HelloWorld");
        User user = userFinder.findByLogin("admin");
        return "Hello " + user.getLogin();
    }

}
